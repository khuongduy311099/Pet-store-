import React from "react";
import "./Policies.scss";
function Policies() {
  return (
    <p className="policies">
      Template, Toolkit, or Bespoke? Speak to any policy writer and he or she
      will tell you that the worst thing you can do is download a set of
      policies from the Internet and impose them on your organization. That is
      absolutely true, but it doesn’t mean you can’t download a good set of
      policies and tailor them to your organization’s requirements. This will be
      a very unpopular view with many security managers, but here, I believe, is
      some very convincing proof. When I took over the security consultancy
      department of a large accounting firm, I inherited dozens of Master of
      Science (MSC) students. One was working on security policies at a large
      international industrial chemical firm. Another was working on
      rationalizing security policies for a European investment bank. Coming
      from two of the best companies in the world with two of the best CISOs in
      charge, these security policies must be considered good, yet everybody
      must concede that the companies were completely different—with different
      sectors and different regulators and in different part of the country. As
      a research project, I got one of the info sec MSC students to normalize
      the language (to eliminate different styles of writing) in a policy
      covering host access from both organizations. When we compared these two
      normalized policies, we found that 73 percent of the statements matched.
      This strongly suggests that although organizations differ, rules governing
      good security will remain broadly constant. Who in this day and age
      couldn’t do with someone else doing 70 percent of their work (or this case
      their policy statements)? You don’t have to believe me; browse the
      Internet, where many organizations publish key security policies. Note the
      different styles, and particularly note the truism of my contention. The
      SANS (SysAdmin, Audit, Network, Security) Institute (www.sans.org), one of
      the more respected security organizations, carries a wide set of template
      policies. To use them, you can just do a scan and replace. I recommend a
      far more tailored approach (in fact, I think many of the SANS policies are
      not technology neutral enough for me), but it is always good to benefit
      from another expert’s work. So Why Haven’t I Just Told You How to Write a
      Good Information Security Policy? The answer is, I have. I have told you
      how to write it, but not what to write. I just haven’t printed five dozen
      policy statements in a couple of chapters, prepended arbitrary titles to
      each dozen, and shouted “Voilà!”You can gain that from practically any
      volume that covers security; it produces a very bad security policy and
      indicates a very bad CISO. What I have shown you is that a security policy
      is the documentation of how you need to protect your information assets
      and systems, both now and in the future. It must take into account your
      asset register and how you seek to protect those assets (a typical process
      that is outlined in Chapter 5, on BS 7799), the laws you must embrace
      (covered in Chapter 4) and the business strategy for the future. However,
      if you need to read more, you will have to read several lengthy volumes. I
      commend you to Writing Information Security Policies, by Scott Barman, or
      any work by Charles Cresson Wood.
    </p>
  );
}

export default Policies;
