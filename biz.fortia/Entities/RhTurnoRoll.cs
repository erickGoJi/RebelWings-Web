﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhTurnoRoll
    {
        public int ClaTurno { get; set; }
        public int ClaEmpresa { get; set; }
        public int ClaRoll { get; set; }
        public int Orden { get; set; }
        public double? DiasDescanso { get; set; }
        public double? DiasTrabajo { get; set; }
        public DateTime? FechaUltCambio { get; set; }
    }
}