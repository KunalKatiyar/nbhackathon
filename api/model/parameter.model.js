const mongoose = require('mongoose');

const paramSchema = new mongoose.Schema({ task: 'string', 
                assignee: 'string', 
                status: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Parameters = mongoose.model('parameters', paramSchema);

module.exports = {
    Parameters
}