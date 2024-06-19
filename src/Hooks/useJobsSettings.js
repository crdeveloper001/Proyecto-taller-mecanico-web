import { useEffect, useState } from 'react';
import { getJobs, addJob, deleteJob, searchJobByStatus, updateJob } from '../Services/JobsService';

const useJobsSettings = () => {

    const [currentJobs, setCurrentJobs] = useState([{
        _id: 0,
        job_Name: "",
        job_Description: "",
        job_Status: "",
        job_Type: "",
        job_Start_Date: "",
        job_End_Date: "",
        job_Location: "",
        job_Assigned: ""
    }])
    const [filteredJobs, setFilteredJobs] = useState([{
        _id: 0,
        job_Name: "",
        job_Description: "",
        job_Status: "",
        job_Type: "",
        job_Start_Date: "",
        job_End_Date: "",
        job_Location: "",
        job_Assigned: ""
    }])
    const [newJob, setNewJob] = useState({
        _id: 0,
        job_Name: "",
        job_Description: "",
        job_Status: "",
        job_Type: "",
        job_Start_Date: "",
        job_End_Date: "",
        job_Location: "",
        job_Assigned: ""
    })
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

    }

    const getCurrentJobs = () => {
        useEffect(() => {
            getJobs()
                .then(results => {
                    setCurrentJobs(results)
                    console.log(currentJobs);
                }).catch(error => {
                    console.log(error);
                })
        }, [])

        return currentJobs
    }

    const filterStatusJobs = async (status) =>{
        await getCurrentJobs()
        const filterByStatus = currentJobs.filter(item => item.job_Status === status);
        setFilteredJobs(filterByStatus);
        return filteredJobs;
        
    }

    const addNewJob = () => {

        addJob(newJob)
            .then(results => {
                alert(results)
            }).catch(error => {
                console.log(error);
            })

    }

    return{
        currentJobs,
        newJob,
        filteredJobs,
        addJob,
        getCurrentJobs,
        filterStatusJobs,
        saveNewClient
    }

}

export default useJobsSettings