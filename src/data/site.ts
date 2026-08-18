export const site={name:"Daniel's Lock & Key",domain:'https://danielslockkey.com',preview:'https://daniels.webxni.com',phone:'(310) 600-2849',phoneHref:'+13106002849',market:'Hollywood',areas:['Hollywood','West Hollywood','East Hollywood','Los Feliz','Silver Lake','Central Los Angeles'],license:'California Locksmith Company LCO 8506',email:''} as const;

export const services=[
 {slug:'home-lockout',type:'Urgent access',title:'Home Lockout Help',short:'Owner-operated help for authorized house, apartment, and condo access.',detail:'Call with the exact address and prepare identification plus proof of occupancy, ownership, or authorized access.'},
 {slug:'residential-rekeying',type:'Key control',title:'Residential Rekeying',short:'Change which keys operate compatible locks after a move, tenant change, or lost key.',detail:'Daniel assesses the existing cylinders and hardware before confirming whether rekeying or replacement is the better fit.'},
 {slug:'lock-repair',type:'Repair first',title:'Lock & Door Hardware Repair',short:'Practical assessment for sticking keys, loose cylinders, worn latches, and alignment problems.',detail:'The lock, latch, strike, door alignment, and hardware condition are reviewed before repair or replacement is recommended.'},
 {slug:'landlord-rekeying',type:'Property access',title:'Landlord & Turnover Rekeying',short:'Coordinated key-control changes for authorized rentals and managed units.',detail:'Prepare the property list, affected openings, existing keys, and documentation showing authority to approve the work.'},
 {slug:'commercial-lock-service',type:'Business access',title:'Small-Business Lock Service',short:'Lockout, rekeying, and repair requests for authorized offices and storefronts.',detail:'Commercial work depends on the installed hardware and the authority of the requesting owner, manager, or occupant.'},
 {slug:'car-lockout',type:'Entry only',title:'Passenger-Vehicle Lockout',short:'Authorized entry when keys are locked inside a passenger vehicle.',detail:'This service does not include replacement keys, cutting, fob programming, transponders, or ignition work.'}
] as const;

export const faqs=[
 ['Will Daniel be the person I speak with?','Daniel’s service is presented as owner-operated and personal. Current availability for a specific request is confirmed by phone.'],
 ['What should I have ready for a lockout?','Bring identification and proof that you are authorized to enter the property or vehicle.'],
 ['Can you rekey my existing locks?','Often, when the cylinders are compatible and serviceable. Daniel checks the hardware before recommending a solution.'],
 ['Do you make or program car keys?','No. Vehicle work is limited to authorized passenger-vehicle lockout entry.'],
 ['Which areas do you serve?','Hollywood and selected nearby Central Los Angeles communities. Exact-address coverage is confirmed by phone.']
] as const;
