<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addProduct(Request $req){
        $product = new Product;
        $product->name=$req->input('name'); 
        $product->price=$req->input('price'); 
        $product->description=$req->input('description'); 
        $product->file_path=$req->file('file')->store('products'); 
        $product->save();
        // return $req->file('file')->store('products');
        return $product;
    }
    function list(){
        return Product::all();
    }
    function delete($id){
        $result=Product::where('id',$id)->delete();
        if ($result){
            return ['result'=>'data has been deleted'];
        }else{
            return ['result'=>"data doesn't exist"];
        }
    }
    function getProduct($id){
        $result=Product::find($id);
        if($result){
            return $result;
        }else{
            return['result'=>'operation failed']; 
        }
    }
    function search($key){
        return Product::where("name","like","%$key%")->get();
    }
}
