SPP.Repulsion=function()
{
	SPP.Force.call(this);
};
SPP.inherit(SPP.Repulsion,SPP.Force);
SPP.Repulsion.prototype.init=function(repulsionPosition,maxValue,r,life)
{
	SPP.Force.prototype.init.call(this,0,0,life);
	this.maxValue=maxValue;
	this.r=r;
	this.repulsionPosition=repulsionPosition;
};
SPP.Repulsion.prototype.update=function(target)
{
	var d =this.repulsionPosition.distanceTo(target.position);
	if(d>this.r)
	{
		this.value.reset(0, 0);
	}else
	{
		this.value.subVectors(target.position,this.repulsionPosition);
		this.value.normalize().setLength(this.maxValue);
	}
	target.resultant.add(this.value);
};
SPP.Repulsion.prototype.dealloc=function()
{
	SPP.Force.prototype.dealloc.apply(this);
	this.maxValue=undefined;
	this.r=undefined;
	this.repulsionPosition=null;
};
