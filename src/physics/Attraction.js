SPP.Attraction=function()
{
	SPP.Force.call(this);
};
SPP.inherit(SPP.Attraction,SPP.Force);
SPP.Attraction.prototype.init=function(attractionPosition,maxValue,r,life)
{
	SPP.Force.prototype.init.call(this,0,0,life);
	this.maxValue=maxValue;
	this.r=r;
	this.attractionPosition=attractionPosition;
};
SPP.Attraction.prototype.update=function(target)
{
	var d =this.attractionPosition.distanceTo(target.position);
	if (d < this.r)
	{
		this.value.reset(0,0);
	}
	else 
	{
		this.value.subVectors(this.attractionPosition,target.position);
		this.value.normalize().setLength(this.maxValue);
	};
	target.resultant.add(this.value);
};
SPP.Attraction.prototype.dealloc=function()
{
	SPP.Force.prototype.dealloc.apply(this);
	this.maxValue=undefined;
	this.r=undefined;
	this.attractionPosition=null;
};