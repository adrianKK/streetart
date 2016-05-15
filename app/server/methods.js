Meteor.methods({
    
    'image.like'(imageId){
        
        var image = Images.findOne({_id:imageId});
        
        if(image) {
            image.likes = image.likes || [];
            if(image.likes.indexOf(Meteor.userId()) > -1) {
                image.likes = _.filter(image.images,(userIdWhoLiked)=> userIdWhoLiked === Meteor.userId())
            }else {
                image.likes.push(Meteor.userId())
            }

            console.log('xxxx')
            console.log(image.likes)
            
            return Images.update({_id:imageId},{$set:{likes:image.likes}})
            
            
            
        }
        
        
    }
})
