<?php

namespace App\Exports;

use App\Models\Attendance;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LeaveExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Attendance::where('status', 'missed')->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Employee ID',
            'Date',
            'Status',
            'Reason',
            'Sign In Time',
            'Sign Off Time',
            'Days of Absence',
            'Notes',
            'Manually Filled',
            'Created At',
            'Updated At',
            // Add more columns as needed
        ];
    }
}
