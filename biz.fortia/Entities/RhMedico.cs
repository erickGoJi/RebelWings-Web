﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhMedico
    {
        public int ClaMedico { get; set; }
        public int ClaEmpresa { get; set; }
        public string NomMedico { get; set; }
        public string NumRfc { get; set; }
        public double? CedProfesional { get; set; }
        public double? NumDgp { get; set; }
        public double? NumSsa { get; set; }
        public DateTime? FechaUltCambio { get; set; }
        public byte? AplicaExamen { get; set; }
        public int ClaSupervisor { get; set; }
        public string InstitucionEdu { get; set; }
        public string EspecialidadMed { get; set; }
    }
}