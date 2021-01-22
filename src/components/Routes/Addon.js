import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Upload, notification } from 'antd'
import { UploadOutlined } from '../../../node_modules/@ant-design/icons'
import { addMovieAction } from '../../actions/movieActions'
import Axios from 'axios'
import { normFile } from '../utils/normFile'
import './routes.less'

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  },
};

let titleString = '';

const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 20,
    },
};

class Addon extends Component{
    state = {
        title: '',
        main_actor: '',
        year: 0,
        summary: '',
        cover: '',
        key: ''
    }

    dispatchMovie = () => {
        this.props.addingMovie(this.state);
        this.props.history.push('/');
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
    }

    uploadImage = (files) => {
        let imageFormData = new FormData();
        imageFormData.append('file', files[0])
        imageFormData.append('upload_preset', 'evyi97yn');
        titleString = this.state.title;
        const newKey = () => {
            titleString = titleString.split(" ");
            titleString = titleString.reduce((accumulator, currentValue) => accumulator.concat(currentValue[0]), []);
            titleString = titleString.join('');
            titleString = titleString.toLowerCase();
        }
        newKey();
        Axios.post('https://api.cloudinary.com/v1_1/dken0bi/image/upload', imageFormData).then((response) => this.setState({
            ...this.state,
            cover: response.data.secure_url,
            key: titleString
        }), () => console.log(this.state));
    }

    handleCLick = () => {
        let canAdd = false;
        for (let movieItem in this.props.movies) {
            if (movieItem.key !== titleString) {
                canAdd = true;
                break;
            }
        }
        if (canAdd) {
            const updateState = async () => {
                console.log(titleString);
                   Promise.resolve(this.setState({
                    ...this.state,
                    key: titleString,
                })); 
            }   
            updateState().then(this.dispatchMovie());      
        } else {
            notification.open({
                message: 'Movie rejected',
                description: 'This movie already exists in the database'
            })
        }      
    }

    render() {
        return (
            <div className='container page-container'>
                <h3 className='page-title'>Add a movie</h3>
                <div className='upload-container'>
                    <Form labelAlign='right'>
                        <Form.Item {...layout} label='Title' name='title' id='title' onChange={this.handleChange}>
                            <Input type='text' /> 
                        </Form.Item>
                        <Form.Item {...layout} label='Main actor(s)' name='main_actor' id='main_actor' onChange={this.handleChange}>
                            <Input type='text' /> 
                        </Form.Item>
                        <Form.Item {...layout} label='Year of launch' name='year' id='year' onChange={this.handleChange}>
                            <Input type='number' /> 
                        </Form.Item>
                        <Form.Item {...layout} label='Description' name='summary' id='summary' onChange={this.handleChange}>
                            <Input.TextArea /> 
                        </Form.Item>
                        <Form.Item {...layout} label='Cover poster' name='cover' id='cover' onChange={(event) => {this.uploadImage(event.target.files)}} valuePropName='fileList' getValueFromEvent={normFile}>
                            <Upload {...props} listType='picture'>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload> 
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={this.handleCLick} htmlType='submit' size='large' type='primary'>Add movie</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingMovie: (movie) => dispatch(addMovieAction(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addon)