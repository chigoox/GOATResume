import React from 'react'
import './StylesForTerms.css'

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-based, so add 1 to get the actual month
const day = today.getDate();



function TermSource({ cName, fName, addr, title, projectTotal, projectDeposit, projectInstallments }) {
    return (
        <div className="c3 doc-content overflow-y-scroll hidescroll w-full">
            <p className="c2"><span className="c0">Website Development Contract</span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">This Website Development Contract
                    (&quot;Contract&quot;) is made and
                    entered into on {`${month}-${day}-${year} `}
                    (&quot;Effective Date&quot;) between:</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">{cName}, a company duly registered and existing
                    under the laws of New
                    Jersey, with its principal place of business at {addr}
                    (&quot;Client&quot;),</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">and</span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">VoidAppx, a web development company duly registered
                    and existing under
                    the laws of New Jersey (&quot;Developer&quot;).</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Contract Signature and Binding</span></p>
            <p className="c2">
                <span className="c0">0.0 Photo ID will be used as a signature to bind
                    this contract</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Services and Deliverables</span></p>
            <p className="c2">
                <span className="c0">1.1 Developer agrees to design, develop, and
                    deliver a website as
                    described in the attached project scope or mutually agreed upon
                    project
                    proposal (&quot;Project Scope&quot;). The Project Scope shall
                    include
                    but not be limited to the following:</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Website design and layout</span></p>
            <p className="c2">
                <span className="c0">Development of website functionality</span>
            </p>
            <p className="c2">
                <span className="c0">Integration of necessary features and plugins</span>
            </p>
            <p className="c2">
                <span className="c0">Responsive design for mobile and tablet devices</span>
            </p>
            <p className="c2">
                <span className="c0">Search engine optimization (SEO) considerations</span>
            </p>
            <p className="c2">
                <span className="c0">Content creation and integration (if applicable)</span>
            </p>
            <p className="c2">
                <span className="c0">Testing, bug fixing, and quality assurance</span>
            </p>
            <p className="c2">
                <span className="c0">Deployment and launch of the website</span>
            </p>
            <p className="c2">
                <span className="c0">1.2 The developer shall provide regular progress
                    updates to the Client
                    during the website development process and seek the Client&#39;s
                    feedback for any required revisions or changes. The client
                    agrees to
                    promptly provide the necessary materials, information, and
                    feedback
                    required for the timely completion of the project.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">1.3 The website shall be developed using
                    industry-standard web
                    development practices, ensuring compatibility across major web
                    browsers
                    and devices.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">1.4 The Project Scope may be revised or modified in
                    writing by mutual
                    agreement of both parties. Any changes in scope may result in
                    adjustments to the project timeline and associated costs.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Payment Terms</span></p>
            <p className="c2">
                <span className="c0">2.1 The total cost of the website development
                    project as per the
                    Project Scope is set at {'$' + projectTotal}. The payment terms
                    are as
                    follows:</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">A non-refundable deposit of {'$' + projectDeposit} (USD) is due upon
                    signing this
                    Contract and is payable within {5} days of the Effective
                    Date.</span>
            </p>
            <p className="c2">
                <span className="c0">Monthly installments of {'$' + projectInstallments} (USD) shall be due on
                    the 1st day
                    of each subsequent month, starting from day of
                    signing until
                    the total payment amount is reached. *only if a payment plan is agreed upon* </span>
            </p>
            <p className="c2">
                <span className="c0">All payments shall be made in United States Dollars
                    (USD) via a
                    mutually agreed-upon payment method.</span>
            </p>
            <p className="c2">
                <span className="c0">2.2 In the event that the Project Scope is modified
                    as per Section 1.4,
                    any associated adjustments to the payment terms shall be agreed
                    upon by
                    both parties in writing.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Project Timeline</span></p>
            <p className="c2">
                <span className="c0">3.1 The project timeline shall be mutually agreed
                    upon by both parties
                    and documented in the Project Scope or project proposal. The
                    developer
                    shall make reasonable efforts to adhere to the agreed timeline,
                    but does
                    not guarantee the completion of the project by a specific date
                    unless
                    otherwise agreed in writing.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">Ownership and Intellectual Property</span>
            </p>
            <p className="c2">
                <span className="c0">4.1 Upon receipt of full payment, the client shall
                    have full ownership
                    rights to the developed website, including all associated source
                    code,
                    design elements, and content.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">4.2.A Developer retains the right to showcase the
                    website in its
                    portfolio or promotional materials, including online and offline
                    platforms.
                </span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">4.2.B The Developer owns the right to all data
                    collected from the
                    developed website and has the right to use the data in any way.
                </span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Confidentiality</span></p>
            <p className="c2">
                <span className="c0">5.1 Both parties agree to keep any confidential
                    information disclosed
                    during the course of this project confidential and not to
                    disclose it to
                    any third parties without the express written/oral consent of
                    the other
                    party.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Termination</span></p>
            <p className="c2">
                <span className="c0">6.1 Either party may terminate this Contract in the
                    event of a material
                    breach by the other party. Notice of termination must be
                    written,
                    specifying the reasons for termination.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">6.2 Upon termination, Client shall be responsible
                    for compensating
                    Developer for all work completed up to the date of termination
                    based on
                    a prorated hourly rate or the agreed-upon payment terms outlined
                    in
                    Section 2, whichever is higher.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">Governing Law and Jurisdiction</span></p>
            <p className="c2">
                <span className="c0">7.1 This Contract shall be governed by and
                    construed in accordance with
                    the laws of New Jersey. Any disputes arising out of or in
                    connection
                    with this Contract shall be subject to the exclusive
                    jurisdiction of the
                    courts of New Jersey.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">IN WITNESS WHEREOF, the parties hereto have
                    executed this Website
                    Development Contract as of the Effective Date.</span>
            </p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">[Client]</span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0 text-red-400 ">Signature: Uploaded ID</span>
            </p>
            <p className="c2">
                <span className="c0">Printed Name: {fName}</span>
            </p>
            <p className="c2">
                <span className="c0">Title: {title}</span>
            </p>
            <p className="c2"><span className="c0">Date: {`${month}-${day}-${year} `}</span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2"><span className="c0">[Developer]</span></p>
            <p className="c1"><span className="c0"></span></p>
            <p className="c2">
                <span className="c0">Signature: [0xc19940601]</span>
            </p>
            <p className="c2">
                <span className="c0">Printed Name: Emmanuel Dike</span>
            </p>
            <p className="c2">
                <span className="c0">Title: Web Dev/ C.E.O</span>
            </p>
            <p className="c2">
                <span className="c4">Date: {`${month}-${day}-${year} `}</span>
            </p>
        </div>
    )
}

export default TermSource