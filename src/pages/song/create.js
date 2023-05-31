import React, { useState } from 'react';
import axios from 'axios';
import '../song/create.css'

const SongUploadForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send the song data, image file, and audio file
    const formData = new FormData();
    const imageData = new FormData();
    formData.append('title', title);
    imageData.append('image', image);
    formData.append('file', audio);
    formData.append('description', description);
    formData.append('artist', artist);
    formData.append('genre', genre);

    try {
        let imageSend;
        if(image) {
                  // Make a POST request to the Express API endpoint
            const responseImage = await axios.post('http://localhost:4000/api/cloudinary/upload', imageData, {
                headers: {
                'Content-Type': 'form-data',
                'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX2lkIjoiNjQ2ZWFlZWIzM2NiMzE3OWVkMDkxZDhkIiwiX192IjowLCJpYXQiOjE2ODQ5NzUzMzksImV4cCI6MTY4NTU3OTMzOX0.b2A6o6VPJUSwThWaES3IgM_TwtoaHCreDyezYCRM4xc"
                }
            });
            imageSend = responseImage.data.filePath
            console.log(responseImage)

        }
        

        formData.append('filePath', imageSend)
        
      // Make a POST request to the Express API endpoint
      const response = await axios.post('http://localhost:4000/api/m-uploader/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX2lkIjoiNjQ2ZWFlZWIzM2NiMzE3OWVkMDkxZDhkIiwiX192IjowLCJpYXQiOjE2ODQ5NzUzMzksImV4cCI6MTY4NTU3OTMzOX0.b2A6o6VPJUSwThWaES3IgM_TwtoaHCreDyezYCRM4xc"
        }
      });

      // Handle the response
      console.log(response.data); // Assuming the response contains the created song object

      // Clear the form fields
      setTitle('');
      setImage(null);
      setAudio(null);
      setDescription('');
      setArtist('');
      setGenre('');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="song-upload-form-container">
      <h2 className='title'>Upload New Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="audio">Audio:</label>
          <input
            type="file"
            id="audio"
            accept="audio/*"
            onChange={handleAudioChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>

  );
};

export default SongUploadForm;

