﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhDetAgrupDatosTrab
    {
        public RhDetAgrupDatosTrab()
        {
            RhDetGpoDatosTrabs = new HashSet<RhDetGpoDatosTrab>();
        }

        public int ClaDetAgrup { get; set; }
        public int ClaAgrup { get; set; }
        public string NomDetAgrup { get; set; }
        public string Descripcion { get; set; }
        public DateTime? FechaUltCambio { get; set; }

        public virtual RhAgrupDatosTrab ClaAgrupNavigation { get; set; }
        public virtual ICollection<RhDetGpoDatosTrab> RhDetGpoDatosTrabs { get; set; }
    }
}