// ComposeModal.js
import React from 'react';
import Modal from 'react-modal';
import { useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import axios
import './ComposeModal.css';

const ComposeModal = ({ isOpen, onRequestClose, user }) => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = async (data, e) => {
    const serverEndpoint = `${process.env.REACT_APP_API_URL}/send-email`;
  
    try {
      const response = await axios.post(serverEndpoint, {
        recipient: data.recipient,
        subject: data.subject,
        message: data.message,
      });
  
      console.log(response.data);
      
      // Reset the form state
     reset();
      
      // Close the modal after successful submission
      onRequestClose();
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Compose Modal"
    >
      <div className="compose-modal">
        <h2>Compose Email</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input field for recipient */}
          <TextField
            {...register('recipient', { required: 'Recipient is required' })}
            label="Recipient"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {/* Input field for subject */}
          <TextField
            {...register('subject', { required: 'Subject is required' })}
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {/* Input field for message */}
          <TextField
            {...register('message', { required: 'Message is required' })}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          {/* Button to send the email */}
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
          <Button onClick={onRequestClose} variant="outlined">
            Close
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ComposeModal;
