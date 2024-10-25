import { useEffect, useState } from "react";
import {
  getJobs,
  addJob,
  deleteJob,
  searchJobByStatus,
  updateJob,
} from "../Services/JobsService";

const useJobsSettings = () => {
  const [currentJobs, setCurrentJobs] = useState([
    {
      _id: 0,
      job_Name: "",
      job_Description: "",
      job_Status: "",
      job_Type: "",
      job_Start_Date: "",
      job_End_Date: "",
      job_Location: "",
      job_Assigned: "",
      ClientInformation: {
        _id: "",
        Name: "",
        Surname: "",
        Email: "",
        Phone: 0,
        CurrentAddress: "",
        VehicleDetails: {
          _id: 0,
          Brand: "",
          Model: "",
          Type: "",
          EngineCapacity: 0,
          RegistrationPlate: ""
        }
      }
    },
  ]);
  const [filteredJobs, setFilteredJobs] = useState([
    {
      _id: 0,
      job_Name: "",
      job_Description: "",
      job_Status: "",
      job_Type: "",
      job_Start_Date: "",
      job_End_Date: "",
      job_Location: "",
      job_Assigned: "",
      ClientInformation: {
        _id: "",
        Name: "",
        Surname: "",
        Email: "",
        Phone: 0,
        CurrentAddress: "",
        VehicleDetails: {
          _id: 0,
          Brand: "",
          Model: "",
          Type: "",
          EngineCapacity: 0,
          RegistrationPlate: ""
        }
      }
    },
  ]);
  const [newJob, setNewJob] = useState({
    _id: null,
    job_Name: "",
    job_Description: "",
    job_Status: "",
    job_Type: "",
    job_Start_Date: "",
    job_End_Date: "",
    job_Location: "",
    job_Assigned: "",
    ClientInformation: {
      _id: "",
      Name: "",
      Surname: "",
      Email: "",
      Phone: 0,
      CurrentAddress: "",
      VehicleDetails: {
        _id: 0,
        Brand: "",
        Model: "",
        Type: "",
        EngineCapacity: 0,
        RegistrationPlate: ""
      }
    }
  });
  const [statusCreated, setStatusCreated] = useState(false)
  const saveNewClient = (e) => {
    switch (e.target.id) {
      case "InputJobName":
        setNewJob((prevState) => ({
          ...prevState,
          job_Name: e.target.value,
        }));

        break;
      case "InputJobDescription":
        setNewJob((prevState) => ({
          ...prevState,
          job_Description: e.target.value,
        }));
        break;
      case "InputJobStatus":
        setNewJob((prevState) => ({
          ...prevState,
          job_Status: e.target.value,
        }));
        break;
      case "InputJobType":
        setNewJob((prevState) => ({
          ...prevState,
          job_Type: e.target.value,
        }));
        break;
      case "InputJobStartDate":
        setNewJob((prevState) => ({
          ...prevState,
          job_Start_Date: e.target.value,
        }));
        break;
      case "InputJobEndDate":
        setNewJob((prevState) => ({
          ...prevState,
          job_End_Date: e.target.value,
        }));
        break;
      case "InputJobLocation":
        setNewJob((prevState) => ({
          ...prevState,
          job_Location: e.target.value,
        }));
        break;
      case "InputJobAssigned":
        setNewJob((prevState) => ({
          ...prevState,
          job_Assigned: e.target.value,
        }));
        break;
      default:
        console.log("no input selected");
        break;
    }
  };

  const getCurrentJobs = () => {
    useEffect(() => {
      getJobs()
        .then((results) => {
          setCurrentJobs(results);
         
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return currentJobs;
  };

  const filterStatusJobs = async (status) => {
    await getCurrentJobs();
    const filterByStatus = currentJobs.filter(
      (item) => item.job_Status === status
    );
    setFilteredJobs(filterByStatus);
    return filteredJobs;
  };

  const addNewJob = (e,client_info) => {

    newJob.ClientInformation = client_info
    e.preventDefault();
    
    addJob(newJob)
      .then((results) => {
        switch (results) {
          case "CREATED":
            setStatusCreated(true)
            break;
          case "NOT_CREATED":
            setStatusCreated(false)

          default:

        }


      })
      .catch((error) => {
        console.log(error);
      });
  };

  const JobNewToInProgress = (job_Detail) => {

  }

  const JobInProgressToCompleted = () => {

  }

  return {
    currentJobs,
    newJob,
    filteredJobs,
    statusCreated,
    addNewJob,
    getCurrentJobs,
    filterStatusJobs,
    saveNewClient,
  };
};

export default useJobsSettings;
