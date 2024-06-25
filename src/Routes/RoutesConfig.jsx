import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "../Components/Login/Login";
import {Dashboard} from "../Components/Dashboard/Dashboard";
import {Clients} from "../Components/Administration/Clients/Clients";
import {Replacements} from "../Components/Administration/Inventory/Replacements/Replacements";
import {Providers} from "../Components/Administration/Inventory/Providers/Providers";
import {Profile} from "../Components/Administration/Profile/Profile";
import {AddNewClient} from "../Components/Administration/Clients/AddNewClient/AddNewClient";
import {Diagnotics} from "../Components/Workshop/Diagnostics/Diagnotics";
import {DiagnosticDetails} from "../Components/Workshop/Diagnostics/DiagnosticDetails/DiagnosticDetails";
import {CreateNewDiagnotic} from "../Components/Workshop/Diagnostics/CreateNewDiagnostic/CreateNewDiagnotic";
import {Tools} from "../Components/Administration/Inventory/Tools/Tools";
import {Workshop} from "../Components/Workshop/Workshop";
import {Inventory} from "../Components/Administration/Inventory/Inventory";
import {JobsPanel} from "../Components/Workshop/PendingJobs/JobsPanel.jsx";
import {Quotes} from "../Components/Workshop/Quotes/Quotes";
import {NewQuote} from "../Components/Workshop/Quotes/NewQuote/NewQuote";
import {PrivateRoutesProtection} from "./PrivateRoutesProtection/PrivateRoutesProtection.jsx";
import { CreateNewJob } from "../Components/Workshop/PendingJobs/CreateNewJob/CreateNewJob.jsx";
import {NotFoundPage} from "../Components/NotFoundPage/NotFoundPage.jsx";

export const RoutesConfig = () => {

    //const isLoggedIn = true;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutesProtection/>}>

                    <Route path="/dashboard" element={<Dashboard/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/profile" element={<Profile/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/clients" element={<Clients/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/add-new-client" element={<AddNewClient/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/replacements" element={<Replacements/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/providers" element={<Providers/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/tools" element={<Tools/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/inventory-dashboard" element={<Inventory/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/workshop-dashboard" element={<Workshop/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/diagnostics" element={<Diagnotics/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/create-new-diagnostic" element={<CreateNewDiagnotic/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/diagnostic-details" element={<DiagnosticDetails/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/pending-jobs" element={<JobsPanel/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/add-new-job" element={<CreateNewJob/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/quotes" element={<Quotes/>} errorElement={<NotFoundPage/>}/>
                    <Route path="/new-quote" element={<NewQuote/>} errorElement={<NotFoundPage/>}/>
                </Route>
                    <Route path="/" element={<Login/>} errorElement={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
