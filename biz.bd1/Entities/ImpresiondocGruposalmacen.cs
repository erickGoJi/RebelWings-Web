﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class ImpresiondocGruposalmacen
    {
        public int Grupo { get; set; }
        public int Id { get; set; }
        public int Codgrupoalmacen { get; set; }

        public virtual Impresiondoc Impresiondoc { get; set; }
    }
}