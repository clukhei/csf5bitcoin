import {NgModule} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'

const MATERIAL = [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule
]

@NgModule({
    imports: [MATERIAL],
    exports: [MATERIAL]
})

export class MaterialModule{}