import CustomerContactModel from "../models/CustomerContactModel.js";

export const getCustomerContactContent = async (req, res) => {
  try {
    const CustomerContact = await CustomerContactModel.find();

    res.status(200).json(CustomerContact);
    console.log("fetched CustomerContact");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCustomerContactContent = async (req, res) => {
  const CustomerContact = req.body;
  const newCustomerContactContent = new CustomerContactModel(CustomerContact);
  try {
    await newCustomerContactContent.save();
    console.log("success");
    res.status(201).json(newCustomerContactContent);
  } catch (error) {
    console.log("error");
    res.status(409).send(error.message);
  }
};
