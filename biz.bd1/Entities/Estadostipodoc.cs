﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Estadostipodoc
    {
        public int Id { get; set; }
        public int Idtipodoc { get; set; }
        public string Estado { get; set; }

        public virtual Tiposdoc IdtipodocNavigation { get; set; }
    }
}