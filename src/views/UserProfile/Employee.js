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

export default function Employee() {
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Enter Staff ID"
                    id="Enter-Staff-ID"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Offical Email"
                    id="officalemail"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Employees Type"
                    id="Employees-Type"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              
                <GridItem xs={12} sm={12} md={4}>
             
                  <CustomInput
                    labelText="Employees Designation"
                    id="Employees-Designation"
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
                    labelText="Employees Department"
                    id="employees-department"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Employees Status"
                    id="Employees-status"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormGroup>
                  <CustomInput
                    labelText="Employees Confirmation"
                    id="pemployeesconfiramtion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </FormGroup>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Employess Location"
                    id="employees-location"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  {/* <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel> */}
                  <CustomInput
                    labelText="Gross Salary"
                    id="Gross-Salary"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Set Date of Employment"
                    id="date"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
               
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Set Date of Leaving"
                    id="date"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>

              <p>Referee</p>
              <hr/>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Name 1"
                    id="Referee Name 1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Address 1"
                    id="Referee Address 1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Phone 1"
                    id="Referee Phone 1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Name 2"
                    id="Referee Name "
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Address 2"
                    id="Referee Address 2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  
                  <CustomInput
                    labelText="Referee Phone 2"
                    id="Referee Phone 2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
             
            </CardBody>
            <CardFooter>
              <Button color="info">Submit</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
