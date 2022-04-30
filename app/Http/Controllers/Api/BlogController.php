<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs, 200);
    }

    public function create(Request $request)
    {
        $post = new Blog;
        $post->shop_name = $request->shop_name;
        $post->shop_category = $request->shop_category;
        $post->kindness_rating = $request->kindness_rating;
        $post->children_chair = $request->children_chair;
        $post->tatami_room = $request->tatami_room;
        $post->crib = $request->crib;
        $post->parent_review = $request->parent_review;
        $post->children_review = $request->children_review;
        $post->save();
        return response()->json($post, 200);
    }
}

