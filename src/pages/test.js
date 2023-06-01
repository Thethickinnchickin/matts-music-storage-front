// import React, { useState } from 'react';
// import axios from 'axios';
// import '../song/create.css'

// const SongUploadForm = () => {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState(null);
//   const [audio, setAudio] = useState(null);
//   const [description, setDescription] = useState('');
//   const [artist, setArtist] = useState('');
//   const [genre, setGenre] = useState('');
  

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleAudioChange = (e) => {
//     setAudio(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create form data to send the song data, image file, and audio file
    
//     let formData;
//     let imageData;
//     for(let data of pretendData) {
//         formData = new FormData();
//         imageData = new FormData();
//         formData.append('title', title);
//         imageData.append('image', image);
//         formData.append('file', audio);
//         formData.append('description', description);
//         formData.append('artist', artist);
//         formData.append('genre', genre);
    
//         try {
//             let imageSend;
//             if(image) {
//                       // Make a POST request to the Express API endpoint
//                 const responseImage = await axios.post('http://localhost:4000/api/cloudinary/upload', imageData, {
//                     headers: {
//                     'Content-Type': 'form-data',
//                     'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX2lkIjoiNjQ2ZWFlZWIzM2NiMzE3OWVkMDkxZDhkIiwiX192IjowLCJpYXQiOjE2ODQ5NzUzMzksImV4cCI6MTY4NTU3OTMzOX0.b2A6o6VPJUSwThWaES3IgM_TwtoaHCreDyezYCRM4xc"
//                     }
//                 });
//                 imageSend = responseImage.data.filePath
//                 console.log(responseImage)
    
//             }
            
    
//             formData.append('filePath', imageSend)
            
//           // Make a POST request to the Express API endpoint
//           const response = await axios.post('http://localhost:4000/api/m-uploader/upload', formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX2lkIjoiNjQ2ZWFlZWIzM2NiMzE3OWVkMDkxZDhkIiwiX192IjowLCJpYXQiOjE2ODQ5NzUzMzksImV4cCI6MTY4NTU3OTMzOX0.b2A6o6VPJUSwThWaES3IgM_TwtoaHCreDyezYCRM4xc"
//             }
//           });
    
//           // Handle the response
//           console.log(response.data); // Assuming the response contains the created song object
    
//           // Clear the form fields
//           setTitle('');
//           setImage(null);
//           setAudio(null);
//           setDescription('');
//           setArtist('');
//           setGenre('');
//         } catch (error) {
//           // Handle error
//           console.error(error);
//         }
//     }

//   };

//   return (
//     <div className="song-upload-form-container">
//       <h2 className='title'>Upload New Song</h2>
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Run Loop</button>
//       </form>
//     </div>

//   );
// };

// export default SongUploadForm;
