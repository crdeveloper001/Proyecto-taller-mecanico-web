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
import {PendingJobs} from "../Components/Workshop/PendingJobs/PendingJobs";
import {Quotes} from "../Components/Workshop/Quotes/Quotes";
import {NewQuote} from "../Components/Workshop/Quotes/NewQuote/NewQuote";
import {NotFoundPage} from "../Components/NotFoundPage/NotFoundPage";
import App from "../App.jsx";

export const RoutesConfig = () => {

    const isLoggedIn = true;


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/add-new-client" element={<AddNewClient/>}/>
                <Route path="/replacements" element={<Replacements/>}/>
                <Route path="/providers" element={<Providers/>}/>
                <Route path="/tools" element={<Tools/>}/>
                <Route path="/inventory-dashboard" element={<Inventory/>}/>
                <Route path="/workshop-dashboard" element={<Workshop/>}/>
                <Route path="/diagnostics" element={<Diagnotics/>}/>
                <Route path="/create-new-diagnostic" element={<CreateNewDiagnotic/>}/>
                <Route path="/diagnostic-details" element={<DiagnosticDetails/>}/>
                <Route path="/pending-jobs" element={<PendingJobs/>}/>
                <Route path="/quotes" element={<Quotes/>}/>
                <Route path="/new-quote" element={<NewQuote/>}/>
            </Routes>
        </BrowserRouter>
    );
};
