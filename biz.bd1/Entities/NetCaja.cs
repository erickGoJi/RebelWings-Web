﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class NetCaja
    {
        public NetCaja()
        {
            NetTerminals = new HashSet<NetTerminal>();
        }

        public Guid IdCaja { get; set; }
        public int? IdTienda { get; set; }
        public int? Codigo { get; set; }
        public string SerieCaja { get; set; }
        public string SerieVentas { get; set; }
        public string SerieDevoluciones { get; set; }
        public string SerieFacturas { get; set; }
        public string SerieCompras { get; set; }
        public string IdAlmacen { get; set; }

        public virtual ICollection<NetTerminal> NetTerminals { get; set; }
    }
}