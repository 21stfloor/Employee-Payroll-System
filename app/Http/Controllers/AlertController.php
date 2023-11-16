<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Employee;
use App\Services\AttendanceServices;
use App\Services\CommonServices;
use App\Services\ValidationServices;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Exports\AttendanceExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Auth;

class AlertController extends Controller
{
    public function __construct()
    {
    }

    

    public function index(Request $request)
    {
        
        // return 'alert!';
        return Inertia::render('Alert/Alerts');
    }

    public function givePenalty(Request $request)
    {
        $loggedInUser = Auth::user();

        if($loggedInUser == null){
            return 'Failed to give penalty, user is not authenticated';
        }
        // return 'alert!';
        return 'Penalty given!';
    }
    
}
