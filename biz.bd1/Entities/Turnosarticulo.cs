﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Turnosarticulo
    {
        public int Codarticulo { get; set; }
        public int Codturno { get; set; }

        public virtual Articulo1 CodarticuloNavigation { get; set; }
        public virtual Turno CodturnoNavigation { get; set; }
    }
}