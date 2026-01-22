const Report = require("../models/Report");

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);

    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateReport = async (req, res) => {
  try {
    const { title, description, severity, status, project } = req.body;
    const updatedReport = await Report.findByIdAndUpdate(
      req.params.id,
      { title, description, severity, status, project },
      { new: true, runValidators: true },
    );
    if (!updatedReport) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const deletedReport = await Report.findByIdAndDelete(req.params.id);
    if (!deletedReport) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
