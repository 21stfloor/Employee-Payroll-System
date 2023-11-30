<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function index()
    {
        $images = Image::all();
        return response()->json($images);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $image = $request->file('image');
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images'), $imageName);

        $imageModel = new Image();
        $imageModel->path = $imageName;
        $imageModel->save();

        // return response()->json(['success'=>'Image uploaded successfully.']);
        return Inertia::render('Image/ImageUpload');
    }
}
