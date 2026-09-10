import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

const InquirySchema: Schema<IInquiry> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    projectType: {
      type: String,
      default: "Full-Stack Web App",
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
