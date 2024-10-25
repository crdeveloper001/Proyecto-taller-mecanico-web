import { useEffect, useState } from "react"
import { getItemsInventory, deleteInventory, postInventory, putInventory, searchInventoryByName } from "../Services/InventoryService"

const useInventoryManagement = () => {
    const [openModalCreateItem, setOpenModalCreateItem] = useState(false)
    const [openModalEditItem, setOpenModalEditItem] = useState(false)
    const [inventoryItems, setInventoryItems] = useState([{ _id: "",
        Name: "",
        Manufacturer: "",
        Quantity: 0,
        Availability: "",
        Provider:"",
        ProviderContact:""}])
    const [newItem, setNewItem] = useState({
        _id: null,
        Name: "",
        Manufacturer: "",
        Quantity: 0,
        Availability: "",
        Provider:"",
        ProviderContact:""
    })

    useEffect(() => {
        retrieveAllInventory()
    }, [])
    //method to open or close create item modal
    const OpenCreationForm = () => {
        setOpenModalCreateItem(true)
    }
    const CloseCreationForm = async () => {
        setOpenModalCreateItem(false)
        await useEffect(() => {
            retrieveAllInventory()
        }, [])

    }
    //methods to open or close edit item modal
    const OpenEditForm = async (itemSelected) => {
        await setOpenModalEditItem(true)
        await setNewItem((prevState) => ({
            ...prevState,
            _id: itemSelected._id,
            Name: itemSelected.Name,
            Provider: itemSelected.Provider,
            Quantity: itemSelected.Quantity,
            Availability: itemSelected.Availability,
            Manufacturer: itemSelected.Manufacturer,
            ProviderContact: itemSelected.ProviderContact,
        }))

    }
    const CloseEditForm = async () => {
        setOpenModalEditItem(false)
        await useEffect(() => {
            retrieveAllInventory()
        }, [])

    }

    const createNewItem = async (e) => {

        console.log(e.target.name);
        switch (e.target.name) {
            case "InputName":
                setNewItem((prevState) => ({
                    ...prevState,
                    Name: e.target.value,
                }))
                break;
            case "InputManufacturer":
                setNewItem((prevState) => ({
                    ...prevState,
                    Manufacturer: e.target.value,
                }))
                break;
            case "InputQuantity":
                setNewItem((prevState) => ({
                    ...prevState,
                    Quantity: e.target.value,
                }))
                break;
            case "InputStock":
                setNewItem((prevState) => ({
                    ...prevState,
                    Availability: e.target.value,
                }))
                break;
            case "InputProvider":
                setNewItem((prevState) => ({
                    ...prevState,
                    Provider: e.target.value,
                }))
                break;
            case "InputProviderContact":
                setNewItem((prevState) => ({
                    ...prevState,
                    ProviderContact: e.target.value,
                }))
                break;

            default:
                break;
        }

    }
    const retrieveAllInventory = async () => {

        const response = await getItemsInventory().then(results => {
            setInventoryItems(results)
        }).catch(error => {
            console.log(error);
        })

    }
    const GenerateNewItem = async () => {

        postInventory(newItem).then(results => {
            CloseCreationForm()
        }).catch(error => {
            console.log(error);
        })
    }

    const UpdateSelectedItem = async() =>{

        putInventory(newItem).then(results => {
            alert("updated")
        }).catch(error => {
            console.log(error);
        })
    }



    return {
        newItem,
        setNewItem,
        inventoryItems,
        openModalCreateItem,
        openModalEditItem,
        OpenCreationForm,
        CloseCreationForm,
        OpenEditForm,
        CloseEditForm,
        GenerateNewItem,
        retrieveAllInventory,
        createNewItem,

    }
}

export default useInventoryManagement