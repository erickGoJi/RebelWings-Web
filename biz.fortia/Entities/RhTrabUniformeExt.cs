﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhTrabUniformeExt
    {
        public int FolAuto { get; set; }
        public int ClaEmpresa { get; set; }
        public int ClaPerded { get; set; }
        public int ClaTrab { get; set; }
        public int ClaPuesto { get; set; }
        public double? PorcPago { get; set; }
        public int Estatus { get; set; }
        public DateTime? FechaEntrega { get; set; }
        public int? TipoMov { get; set; }
        public int? ClaPresupuesto { get; set; }
        public DateTime? FechaAutorizacion { get; set; }
        public int? GeneroMovNomina { get; set; }
        public DateTime? FechaMov { get; set; }
        public DateTime FechaUltCambio { get; set; }

        public virtual RhPerded Cla { get; set; }
        public virtual RhPuesto ClaNavigation { get; set; }
    }
}