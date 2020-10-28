<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('index');
    }

    /**
     * Show the profile for the given user.
     *
     * @return \Illuminate\View\View
     */
    public function home()
    {
        return view('home');
    }
}
