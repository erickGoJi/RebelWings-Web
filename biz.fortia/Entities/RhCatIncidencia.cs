﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhCatIncidencia
    {
        public int ClaEmpresa { get; set; }
        public int ClaIncidencia { get; set; }
        public string NomIncidencia { get; set; }
        public string SpIncidencia { get; set; }
        public int? TipoIncidencia { get; set; }
        public int? ClaveInc { get; set; }
        public int? ClaTipoTe { get; set; }
        public byte? EstatusInicial { get; set; }
        public string RestriccionSql { get; set; }
        public byte? EjecutaAuto { get; set; }
        public int? Orden { get; set; }
        public string NomCorto { get; set; }
        public byte ReqSolSino { get; set; }
        public byte CapturaDirectaSino { get; set; }
        public int TipoEnvioFecha { get; set; }
        public string Status { get; set; }
    }
}