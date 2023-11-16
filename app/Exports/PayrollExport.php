<?php

namespace App\Exports;

use App\Models\Payroll;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PayrollExport implements FromCollection//, WithHeadings
{
    public function collection()
    {
        return Payroll::all();
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
