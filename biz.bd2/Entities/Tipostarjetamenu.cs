﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Tipostarjetamenu
    {
        public int Idtipotarjeta { get; set; }
        public int Codarticulo { get; set; }

        public virtual Articulo1 CodarticuloNavigation { get; set; }
        public virtual Tipostarjetum IdtipotarjetaNavigation { get; set; }
    }
}