﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhRetroactivo
    {
        public int ClaRetroactivo { get; set; }
        public int ClaTrab { get; set; }
        public int ClaEmpresa { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public DateTime FechaAplica { get; set; }
        public DateTime FechaIncremento { get; set; }
        public int? Estatus { get; set; }
        public int TipoRetroactivo { get; set; }
        public string Descripcion { get; set; }
        public string TipoNomina { get; set; }
        public int ClaTabSue { get; set; }
        public int ClaTabSueAnt { get; set; }
        public int ClaMovExp { get; set; }
        public DateTime FechaMovExp { get; set; }
        public DateTime? FechaUltCambio { get; set; }
        public byte? DescontarAdeudo { get; set; }
        public DateTime? FechaIniAdeudo { get; set; }
        public DateTime? FechaFinAdeudo { get; set; }
        public int? FolioTabSue { get; set; }
    }
}