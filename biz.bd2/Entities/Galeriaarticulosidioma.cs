﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Galeriaarticulosidioma
    {
        public int Idgaleria { get; set; }
        public int Codarticulo { get; set; }
        public string Codidioma { get; set; }
        public string Descripcion { get; set; }

        public virtual Galeriaarticulo Galeriaarticulo { get; set; }
    }
}