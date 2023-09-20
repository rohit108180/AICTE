const Resource = require("../Models/Resources");

module.exports.get = async (req, res) => {
  try {
    const degree = req.query.degree;
    const department = req.query.department;
    const course = req.query.course;
    const filterObj = {};
    if (degree && degree !="All") filterObj.Degree = degree;
    if (department && department != "All") filterObj.Department = department;
    if (course && course != "All") filterObj.Course = course;
    const resources = await Resource.find(filterObj);
    await res.status(200).json(resources);
  } catch (err) {
    await res.status(400).json(err);
  }
};

module.exports.post = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return await res.status(401).json("Unauthorized");
    const name = req.body.Name;
    const authors = req.body.Authors;
    const department = req.body.Department;
    const course = req.body.Course;
    const driveLink = req.body.DriveLink;
    const about = req.body.About;
    const degree = req.body.Degree;
    const newResource = new Resource({
      Name: name,
      About: about,
      Authors: authors,
      Department: department,
      Degree: degree,
      Course: course,
      DriveLink: driveLink,
    });
    const savedResource = await newResource.save();
    await res.status(200).json(savedResource);
  } catch (err) {
    await res.status(400).json(err);
  }
};
