<<<<<<< HEAD
# aws-cloudfactory
A set of tools using gulp and cloudformation to simplify and standardize the creation of new aws infrastructure.

Development : AWS Resource Naming  

1.  [Development](index.html)
2.  [Development](Development_314441861.html)
3.  [AWS](AWS_322928641.html)

Development : AWS Resource Naming
=================================

Created by Tyler Wright, last modified on Oct 17, 2019

Within AWS, there are a ton of different “things”. These can be server instances, load balancers, VPC’s, subnets, to name a few. AWS considers these different “things” as resources. Given the sheer amount of different resources we use, we need a standard way to name each resource to keep things identifiable. Below is a list of 3 letter short names for the different resource types.

/\*<!\[CDATA\[\*/ div.rbtoc1572959825103 {padding: 0px;} div.rbtoc1572959825103 ul {list-style: disc;margin-left: 0px;} div.rbtoc1572959825103 li {margin-left: 0px;padding-left: 0px;} /\*\]\]>\*/

*   [Resource Naming Conventions](#AWSResourceNaming-ResourceNamingConventions)
*   [Tenants](#AWSResourceNaming-Tenants)
*   [Applications](#AWSResourceNaming-Applications)
*   [Environments](#AWSResourceNaming-Environments)
*   [AWS Services](#AWSResourceNaming-AWSServices)
*   [AWS Resources](#AWSResourceNaming-AWSResources)
*   [AWS Regions](#AWSResourceNaming-AWSRegions)
*   [Sever Types](#AWSResourceNaming-SeverTypes)
*   [Accessability Naming](#AWSResourceNaming-AccessabilityNaming)

Resource Naming Conventions
---------------------------

{tenent}-{app}-{environment}-{service}-{resource}-{description}

example: hst-evv-tst-ec2-ins-wkr

Tenants
-------

![](images/icons/grey_arrow_down.png)Expand

| **Tenant** | **Abbreviation** |
| --- | --- |
| Healthstar | hst |
| United Healthcare of Tennessee | uht |
| Amerigroup of Tennessee | agt |


Applications
------------

![](images/icons/grey_arrow_down.png)Expand

| **Application** | **Abbreviation** |
| --- | --- |
| Electronic Visit Verify | evv |
| Data Aggregation Lite | agg |

Environments
------------

![](images/icons/grey_arrow_down.png)Expand

| **Environment** | **Area** | **Region** | **Abbreviation** |
| --- | --- | --- | --- |
| Development | \- | \- | dev |
| Test | US East (Ohio) | us-east-2 | tst |
| Stage | US East (N. Virginia) | us-west-2 | stg |
| Demo | US West (N. California) | us-east-1 | dmo |
| Production | US West (Oregon) | us-east-1 | prd |
| Global | - | - | gbl |

AWS Services
------------

![](images/icons/grey_arrow_down.png)Expand

| **Service** | **Abbreviation** |
| --- | --- |
| Alexa for Business | afb |
| Alexa Skill | ask |
| Amazon Auto Scaling | aus |
| Amazon Chime | ach |
| Amazon Cognito | cog |
| Amazon Comprehend | cph |
| Amazon Cost Explorer | ace |
| Amazon Data Lifecycle Manager | dlm |
| Amazon DocumentDB | ddb |
| Amazon DynamoDB Accelerator | dax |
| Amazon EC2 Auto Scaling | eas |
| Amazon Elastic Container Registry | ecr |
| Amazon Elastic MapReduce | emr |
| Amazon EventBridge | aeb |
| Amazon File Storage | fsx |
| Amazon Forecast | afc |
| Amazon Kinesis | kns |
| Amazon Kinesis Data Analytics V2 | kda |
| Amazon Kinesis Data Firehose | kdf |
| Amazon Macie | mce |
| Amazon Managed Streaming for Apache Kafka | msk |
| Amazon Neptune | nep |
| Amazon Personalize | apl |
| Amazon Polly | apy |
| Amazon RedShift | red |
| Amazon Relational Database Service | rds |
| Amazon Resource Access Manager | ram |
| Amazon S3 | as3 |
| Amazon SageMaker | asm |
| Amazon Simple Email Service | ses |
| Amazon Simple Notification Service | sns |
| Amazon Simple Queue Service | sqs |
| Amazon Simple Workflow Service Dashboard | swf |
| Amazon SimpleDb | sdb |
| Amazon Sumerian | asu |
| Amazon Textract | tex |
| Amazon Transcribe | tsb |
| Amazon Translate | atl |
| AmazonLex | lex |
| AmazonMq | amq |
| AmazonQuantumLedger | aql |
| Amplify Console | amp |
| Api Gateway | agw |
| Api Gateway V2 | ag2 |
| App Mesh | apm |
| Application Auto Scaling | aps |
| AppStream 2.0 | as2 |
| AppSync | asy |
| Artifact | art |
| Athena | ath |
| AWS Backup | bkp |
| AWS Batch | bat |
| AWS Budgets | bgt |
| AWS Chatbot | acb |
| AWS Cloud9 | cd9 |
| AWS CloudMap | acm |
| AWS Data Pipeline | adp |
| AWS Database Migration Service | dms |
| AWS DeepLens | adl |
| AWS DeepRacer | adr |
| AWS Glue | glu |
| AWS Identity and Access Management | iam |
| AWS IoT Greengrass | igs |
| AWS IoT Things Graph | itg |
| AWS License Manager | alm |
| AWS Marketplace Subscriptions | ams |
| AWS SFTP | ftp |
| AWS Single Sign-On | ssn |
| Certificate Manager | crt |
| CloudFormation | cfm |
| CloudFront | cft |
| CloudHSM | hsm |
| CloudTrail | ctl |
| CloudWatch | clw |
| CloudWatch Logs | cwl |
| CodeBuild | scm |
| CodeCommit | scm |
| CodeDeploy | scm |
| CodePipeline | scm |
| CodeStar | scm |
| Config | cfg |
| DataSync | dsy |
| Device Farm | dfm |
| Directory Service | dir |
| DynamoDB | dyn |
| Elastic Beanstalk | ebn |
| Elastic Compute Cloud | ec2 |
| Elastic Container Service | ecs |
| Elastic File Storage | efs |
| Elastic Kubernetes Service | eks |
| Elastic Load Balancing | elb |
| Elastic Transcoder | etc |
| ElastiCache | ech |
| ElasticLoadBalancingV2 | eb2 |
| Elasticsearch | esh |
| Elemental Appliances & Software | ela |
| GameLift | gft |
| Ground Station | gst |
| GuardDuty | gdy |
| Inspector | ipc |
| Internet of Things | iot |
| IoT Analytics | ioa |
| IoT Device Defender | idd |
| IoT SiteWise | isw |
| IoT1Click | ioc |
| IoTEvents | ioe |
| Key Management Store | kms |
| Kinesis Video Streams | kvs |
| KinesisAnalytics | kna |
| LakeFormation | lkm |
| Lambda | lmb |
| Machine Learning | mln |
| ManagedBlockchain | mbc |
| MediaConnect | mct |
| MediaConvert | mcv |
| MediaLive | mlv |
| MediaPackage | mpk |
| MediaStore | mst |
| MediaTailor | mtr |
| OpsWorks | ows |
| OpsWorks-CM | owc |
| Pinpoint | ppt |
| PinpointEmail | ppe |
| Rekognition | rek |
| RoboMaker | rbm |
| Route 53 | r53 |
| Route 53 Resolver | r5r |
| S3 Glacier | s3g |
| Secrets Manager | smr |
| SecurityHub | shb |
| Serverless Application Repository | sar |
| Service Catalog | svc |
| Shared Property Types | spt |
| Snowball | sbl |
| Step Functions | sfn |
| Storage Gateway | sgw |
| Systems Manager | sym |
| Virtual Private Cloud | epc |
| Web Application Firewall | waf |
| Web Application Firewall Regional | wfr |
| WorkDocs | wkd |
| WorkLink | wkl |
| WorkMail | wml |
| WorkSpaces | wsp |
| X-Ray | xry |

AWS Resources
-------------

![](images/icons/grey_arrow_down.png)Expand

| **Service** | **Resource** | **Abbreviation** |
| --- | --- | --- |
| EC2 | EC2 Instance | ins |
| EC2 | Launch Template | ltp |
| EC2 | Spot Request | spt |
| EC2 | Reserved Instances | rsv |
| EC2 | Dedicated Host | dht |
| EC2 | Capacity Reservation | cpr |
| EC2 | Amazon Machine Image | ami |
| EC2 | Volumn | vol |
| EC2 | Snapshot | snp |
| EC2 | Lifecycle Manager | lcm |
| EC2 | Security Group | sgp |
| EC2 | Elastic IP | eip |
| EC2 | Placement Group | pgp |
| EC2 | Key Pair | key |
| EC2 | Network Interface | nif |
| EC2 | Elastic Load Balancer | elb |
| EC2 | Target Group | tgp |
| EC2 | Launch Configuration | lcf |
| EC2 | Auto Scaling Group | asg |
| EC2 | Alarm | alm |
| RDS | Database Cluster | dbc |
| RDS | Database | dbs |
| RDS | Database Snapshot | dss |
| RDS | Database Reserved Instance | dri |
| RDS | Database Subnet Group | dsg |
| RDS | Parameter Group | pgp |
| RDS | Database Option Group | dog |
| RDS | Database Event Subscription | des |
| S3 | S3 Bucket | bkt |
| S3 | S3 Batch Job | bsj |
| IAM | Group | igp |
| IAM | User | usr |
| IAM | Role | rol |
| IAM | Policy | pol |
| IAM | Identity Provider | idp |
| VPC | Subnet | sub |
| VPC | Route Table | rtb |
| VPC | Internet Gateway | igw |
| VPC | Egress-only Internet Gateway | eig |
| VPC | DHCP option set | dos |
| VPC | Elastic IP | eip |
| VPC | Endpoint | ept |
| VPC | Endpoint Service | esv |
| VPC | NAT Gateway | nat |
| VPC | VPC Peering Connection | pcn |
| VPC | Network ACL | acl |
| VPC | Security Group | sgp |
| VPC | Customer Gateway | cgw |
| VPC | Virtual Private Gateway | vpg |
| VPC | Site-to-Site VPN Connection | s2s |
| Route53 | Health Check | hck |
| Route53 | Trafic Policy | tpl |
| Route53 | Inbound Endpoint | iep |
| Route53 | Outbound Endpoint | oep |
| Route53 | Rule | rul |
| SCM | Build Project | cbp |
| SCM | Build Trigger | cbt |
| SCM | Application | cda |
| SCM | Deployment Group | cdg |
| SCM | Deployment Configuration | cdf |
| SCM | CodePipeline | cpp |
| CloudFormation | Stack | stk |
| CloudFormation | Stack Set | sts |
| Lambda | Application | lap |
| Lambda | Function | lfn |
| Lambda | Layer | lyr |
| Elasticache | Memcached | mem |
| Elasticache | Redis | crd |
| Elasticache | Parameter Group | cpg |
| Elasticache | Subnet Group | csg |
| API Gateway | API | api |
| API Gateway | Stage | gws |
| API Gateway | Authorizer | gaz |
| API Gateway | Model | gml |
| API Gateway | Usage Plan | gup |
| API Gateway | API Key | gky |
| API Gateway | VPC Link | gvl |
| CloudFront | Distribution | cfd |
| CloudFront | Public Key | cfk |
| CloudFront | Encryption Profile | cep |
| Secrets Manager | Secret | sec |
| Systems Manager | Parameter | prm |
| Systems Manager | Document | doc |
| SNS | Topic | top |
| SNS | Subscription | ssp |
| SQS | Queue | que |
| WAF | Web ACL | wcl |
| WAF | Web ACL Condition | wac |
| WAF | Web ACL Rule | war |
| WAF | Firewall Security Policy | fsp |
| WAF | Firewall Security Group | frg 

AWS Regions
-----------

![](images/icons/grey_arrow_down.png)Expand

| --- | --- | --- | --- |
| US East (Ohio) | us-east-2 | rds.us-east-2.amazonaws.com | ue2 |
| US East (N. Virginia) | us-east-1 | rds.us-east-1.amazonaws.com | ue1 |
| US West (N. California) | us-west-1 | rds.us-west-1.amazonaws.com | uw1 |
| US West (Oregon) | us-west-2 | rds.us-west-2.amazonaws.com | uw2 |

Sever Types
-----------

![](images/icons/grey_arrow_down.png)Expand

| **Type** | **Abbreviation** |
| --- | --- |
| Website | web |
| Rest API | api |
| Worker | wkr |
| Reporter | rpt |
| Bastion | bas |
| FTP | ftp |

Accessability Naming
--------------------

![](images/icons/grey_arrow_down.png)Expand

| **Accessability** | **Abbreviation** |
| --- | --- |
| Public | pub |
| Private | pvt |

Document generated by Confluence on Nov 05, 2019 08:17

[Atlassian](http://www.atlassian.com/)
=======
# aws-cloudfactory
>>>>>>> 6e4ddea6409819e6ce9835e21cb243ea895a44f4
