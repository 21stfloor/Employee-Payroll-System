<?php

namespace App\Exports;

use App\Models\Attendance;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LeaveExport implements FromCollection//, WithHeadings
{
    public function collection()
    {
        return Attendance::where('status', 'missed')->get();
    }

    // public function headings(): array
    // {
    //     return [
    //         'ID',
    //         'User ID',
    //         'Date',
    //         // Add more columns as needed
    //     ];
    // }
}
