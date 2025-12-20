import Service from "../models/Service.js";


export const createService = async (req, res) => {
  try {
    const { image, heading, subheading, price } = req.body;

    if (!image || !heading || !subheading || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const service = await Service.create({
      image,
      heading,
      subheading,
      price,
    });

    res.status(201).json({ message: "Service created", service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getServices = async (req, res) => {
   console.log("GET /api/services HIT");
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const { image, heading, subheading, button } = req.body;

    service.image = image || service.image;
    service.heading = heading || service.heading;
    service.subheading = subheading || service.subheading;
    service.button = button || service.button;

    await service.save();

    res.status(200).json({ message: "Service updated", service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.remove();

    res.status(200).json({ message: "Service deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
