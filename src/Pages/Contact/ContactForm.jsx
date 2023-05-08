import { Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import './Contact.scss';

export default function ContactForm() {
  return (
    <Grid container className="contact__form">
      <Grid item md={6} lg={6} paddingX={1.875} className="contact__form-schedule">
        <div className="contact__form-schedule-title">
          <h2>let's work together</h2>
          <p>to make requests for further information, contact us via our social channels.</p>
        </div>
        <ul>
          <li><span>weekday:</span>08:00 am to 18:00 pm</li>
          <li><span>saturday:</span>10:00 am to 16:00 pm</li>
          <li><span>sunday:</span>Closed</li>
        </ul>
      </Grid>
      <Grid item md={6} lg={6} paddingX={1.875}>
        <Grid container>
          <Grid
            item
            md={6}
            lg={6}
            textAlign={'center'}
            paddingX={1.875}
            marginBottom={3.75}
          >
            <TextField
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="contact__form-textfield"
            />
          </Grid>
          <Grid
            item
            md={6}
            lg={6}
            textAlign={'center'}
            paddingX={1.875}
            marginBottom={3.75}
          >
            <TextField 
              required 
              id="outlined-basic" 
              label="Email" 
              variant="outlined"
              className="contact__form-textfield"
            />
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          paddingX={1.875}
          marginBottom={3.75}
        >
          <TextField 
            required 
            id="outlined-basic" 
            label="Subject" 
            variant="outlined"
            className="contact__form-textfield"
          />
        </Grid>
        <Grid item md={12} lg={12} paddingX={1.875}>
          <TextareaAutosize
            required
            id="outlined-basic"
            maxRows={4}
            placeholder="Your Question"
            className="contact__form-textarea"
          />
        </Grid>
        <Button
          sx={{
            padding: '15px 35px',
            backgroundColor: '#db2d2e',
            fontSize: '15px',
            color: '#fff',
            textTransform: 'capitalize',
            fontWeight: 700,
            margin: '15px',
            '&:hover': {
              backgroundColor: '#db2d2e',
            }
          }}
        >submit now</Button>
      </Grid>
    </Grid>
  )
}
