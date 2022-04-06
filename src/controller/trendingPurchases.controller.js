/*File:trendingPurchases.controller
Author: Ninad Nitin Shukla(B00863694)
Purpose: Takes the entries from order 
collection count their frequencies 
sort them according to frequencies and 
take their corresponding imageUrLS*/
const trendingPurchase =require("../model/Order");
const bookImages =require("../model/Book");

const trendingPurchases = async (req, res) => {
    var bookIDs = [];
    function sortByFrequency(array) {
        var frequency = {};
    
        array.forEach(function(value) { frequency[value] = 0; });
    
        var uniques = array.filter(function(value) {
            return ++frequency[value] == 1;
        });
    
        return uniques.sort(function(a, b) {
            return frequency[b] - frequency[a];
        });
    }
      const recentpurchase = await trendingPurchase.find();
      
      if (recentpurchase.length == 0) {
        return res
          .status(404)
          .send({ message: "No recent purchase", success: false });
      }
    
       recentpurchase.map((d, k) => {
        console.log(d.bookName);
        bookIDs.push(d.bookName);
    })
    
    const x=sortByFrequency(bookIDs)
      const urls= await bookImages.find({ title: { $in: x } });
      return res.status(200).send({ success: true, data: urls});
    } 
  exports.trendingPurchases= trendingPurchases;
