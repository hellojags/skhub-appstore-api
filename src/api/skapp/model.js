import mongoose, { Schema } from 'mongoose'

const skappSchema = new Schema({
  version: {
    type: String
  },
  skapp_id: {
    type: String
  },
  skylink: {
    type: String
  },
  title: {
    type: String
  },
  filename: {
    type: String
  },
  fileformat: {
    type: String
  },
  description: {
    type: String
  },
  type: {
    type: String
  },
  directory: {
    type: String
  },
  size: {
    type: String
  },
  category: {
    type: String
  },
  developer: {
    type: String
  },
  blacklist: {
    type: String
  },
  blacklist_date: {
    type: String
  },
  skhub_blacklist: {
    type: String
  },
  skhub_blacklist_date: {
    type: String
  },
  portal: {
    type: String
  },
  searchable: {
    type: String
  },
  ratings: {
    type: String
  },
  reviews: {
    type: String
  },
  compatibility: {
    type: String
  },
  languages: {
    type: String
  },
  age_rating: {
    type: String
  },
  price: {
    type: String
  },
  app_support: {
    type: String
  },
  git_url: {
    type: String
  },
  auth_code: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

skappSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      version: this.version,
      skapp_id: this.skapp_id,
      skylink: this.skylink,
      title: this.title,
      filename: this.filename,
      fileformat: this.fileformat,
      description: this.description,
      type: this.type,
      directory: this.directory,
      size: this.size,
      category: this.category,
      developer: this.developer,
      blacklist: this.blacklist,
      blacklist_date: this.blacklist_date,
      skhub_blacklist: this.skhub_blacklist,
      skhub_blacklist_date: this.skhub_blacklist_date,
      portal: this.portal,
      searchable: this.searchable,
      ratings: this.ratings,
      reviews: this.reviews,
      compatibility: this.compatibility,
      languages: this.languages,
      age_rating: this.age_rating,
      price: this.price,
      app_support: this.app_support,
      git_url: this.git_url,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  },
  view_mod (full) {
    const view = {
      // simple view
      id: this.id,
      version: this.version,
      skapp_id: this.skapp_id,
      skylink: this.skylink,
      title: this.title,
      filename: this.filename,
      fileformat: this.fileformat,
      description: this.description,
      type: this.type,
      directory: this.directory,
      size: this.size,
      category: this.category,
      developer: this.developer,
      blacklist: this.blacklist,
      blacklist_date: this.blacklist_date,
      skhub_blacklist: this.skhub_blacklist,
      skhub_blacklist_date: this.skhub_blacklist_date,
      portal: this.portal,
      searchable: this.searchable,
      ratings: this.ratings,
      reviews: this.reviews,
      compatibility: this.compatibility,
      languages: this.languages,
      age_rating: this.age_rating,
      price: this.price,
      app_support: this.app_support,
      git_url: this.git_url,
      auth_code: this.auth_code,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Skapp', skappSchema)

export const schema = model.schema
export default model
