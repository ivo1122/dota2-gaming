import ReviewSchema from "../models/ReviewSchema.js"
import Coach from "../models/CoachSchema.js"

//get all reviews

export const getAllReviews = async (req,res) => {
    try {
        const reviews = await ReviewSchema.find({})
        res.status(200).json({success:true, message:"Successful", data:reviews})
    } catch (err) {
        res.status(404).json({success:true, message:"Not found"})

    }
}

//create review function

export const createReview = async (req,res) => {
    if(!req.body.doctor) req.body.coach = req.params.doctorId
    if(!req.body.doctor) req.body.user = req.userId

    const savedReview = new ReviewSchema(req.body)

    try {
        const savedReview = await newReview.save()
        await Coach.findByIdAndUpdate(req.body.doctor, {
            $push:{reviews:savedReview._id}
        })

        res.status(200).json({success:true, message:"Review submitted", data:savedReview})
    } catch (err) {
        res.status(500).json({success:false, message: err.message})

    }

}