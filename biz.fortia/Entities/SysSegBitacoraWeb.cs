﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class SysSegBitacoraWeb
    {
        public SysSegBitacoraWeb()
        {
            SysSegBitacoraWebDets = new HashSet<SysSegBitacoraWebDet>();
        }

        public int IdBitacora { get; set; }
        public int ClaUsuario { get; set; }
        public int ClaSistema { get; set; }
        public int IdSesion { get; set; }
        public string ClaveObjeto { get; set; }
        public DateTime FechaUltCambio { get; set; }
        public string HostName { get; set; }
        public string DireccionIp { get; set; }
        public string TablaAfectada { get; set; }
        public string TipoOperacion { get; set; }

        public virtual ICollection<SysSegBitacoraWebDet> SysSegBitacoraWebDets { get; set; }
    }
}