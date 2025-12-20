import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body); 
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); 
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
