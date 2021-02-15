import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from "@material-ui/core/InputLabel";
// import DropdownMenu from "@material-ui/core/DropdownMenu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
// core components

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
   
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Employees</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>


        
            <CardBody>
            <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Store />
          <p>Personal Details</p>
        
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Store />
          <p>Employees Info</p>
        
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Store />
          <p>Employees Info</p>
        
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Store />
          <p>Employees Info</p>
        
        </GridItem>
      </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="LastName"
                    id="LastName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="FirstName"
                    id="FirstName"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="OtherName"
                    id="OtherName"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer> 
                <GridItem xs={12} sm={12} md={4}>
             
                  <CustomInput
                    labelText="Gender"
                    id="Gender"
                    MenuItem="Male"
                    
                                 
                    formControlProps={{
                      fullWidth: true
                      
                    }}
                  />
                  {/* <select>
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                  </select> */}
                    
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Marital Status"
                    id="martialstatus"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              {/* </GridContainer>
              <GridContainer> */}
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Personal Email"
                    id="personal-email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormGroup>
                  <CustomInput
                    labelText="Phone Number"
                    id="phoneNumber"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </FormGroup>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Set Date of Birth"
                    id="dateofBirth"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              {/* </GridContainer>
              <GridContainer> */}
                <GridItem xs={12} sm={12} md={4}>
                  {/* <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel> */}
                  <CustomInput
                    labelText="Nationality"
                    id="nationality"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  
                  <CustomInput
                    labelText="State"
                    id="Current-Address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  
                  <CustomInput
                    labelText="Permanant Address"
                    id="Permanant-Address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  
                  <CustomInput
                    labelText="State"
                    id="state"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  
                  <CustomInput
                    labelText="Town"
                    id="town"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
             
            </CardBody>
            <CardFooter>
              <Button color="info">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p> */}
              {/* <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
