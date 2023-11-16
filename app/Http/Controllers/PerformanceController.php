<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Employee;
use App\Models\Task;
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

class PerformanceController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $tasks = Task::with('employee')
            ->get()
            ->map(function ($task) {
                return [
                    'employee_name' => $task->employee->name,
                    'task_count' => $task->count(),
                ];
            });

        // Check if tasks is empty
        if ($tasks->isEmpty()) {
            // If tasks is empty, return an empty array
            $tasks = [];
        }

        return Inertia::render('Performance/Performances', [
            'tasks' => $tasks,
        ]);
    }

}

