﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Tiquetsmodif
    {
        public short Fo { get; set; }
        public string Serie { get; set; }
        public int Numero { get; set; }
        public string N { get; set; }
        public int Numlinea { get; set; }
        public short Nummodif { get; set; }
        public string Descripcion { get; set; }
        public double? Incprecio { get; set; }
        public int? Codmodif { get; set; }
        public int? Codarticulo { get; set; }
        public short? Orden { get; set; }
        public short? Nivel { get; set; }

        public virtual Tiquetslin Tiquetslin { get; set; }
    }
}